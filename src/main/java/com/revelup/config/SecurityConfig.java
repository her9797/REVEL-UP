package com.revelup.config;

import com.revelup.common.UserRole;
import com.revelup.config.handler.AuthFailHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig  {

    @Autowired
    private AuthFailHandler authFailHandler;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomize() {
        return web -> web.ignoring()
                .requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }



    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> {
            /* 인가를 받지 않아도 (비회원이어도 접속할 수 있는 페이지 or 파일들) */
            auth.requestMatchers("/content/user/login", "/content/user/sign-up", "/content/user/fail", "/content/user/modal",
                    "/content/user/user-find", "/content/user/user-find-id","/content/user/user-find-password",
                    ("/content/user/findId"),("/content/user/findPw"),("/content/user/updatePw"),("/content/user/emailCheck"),
                    "/", "/main",("/content/user/sendMail"),("/content/user/idCheck"),("/content/user/nameCheck"),"/content/funding/insertFunding",
                    ("/css/**"),("/fragments/**"),("/img/**"),("/js/**"),("/content/funding/all-funding"), ("/upload/**"), "/content/funding/all-funding/{fndCode}").permitAll();
            auth.requestMatchers(UserRole.게터.getRole()).permitAll(); /* role의 상태가 게터면 접속할 수 있는 페이지 */
            auth.requestMatchers(UserRole.세터.getRole()).permitAll(); /* role의 상태가 세터면 접속할 수 있는 페이지 */
            auth.requestMatchers(UserRole.매니저.getRole()).permitAll(); /* role의 상태가 매니저면 접속할 수 있는 페이지 */
            auth.anyRequest().authenticated();

        }).formLogin(login -> {
            login.loginPage("/content/user/login");
            login.usernameParameter("userId"); /* 로그인 시 username의 파라미터 */
            login.passwordParameter("userPw"); /* 로그인 시 password의 파라미터 */
            login.defaultSuccessUrl("/", true); /* 로그인 성공 시 반환 할 페이지 */
            login.failureHandler(authFailHandler); /* 실패 시 인터셉트해서 핸들러가 authFailHandler가 인터셉트 하여 실패 로직을 처리해줌 */

        }).logout(logout -> {
            logout.logoutRequestMatcher(new AntPathRequestMatcher("/user/logout")); /* 로그아웃 주소 */
            logout.deleteCookies("JSESSIONID");
            logout.invalidateHttpSession(true);
            logout.logoutSuccessUrl("/"); /* 로그아웃 시 반환받을 페이지 */

        }).sessionManagement(session -> {
            session.maximumSessions(1);
            session.invalidSessionUrl("/");

        }).csrf(csrf -> csrf.disable());

        return http.build();
    }


}