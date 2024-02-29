describe("사용자 회원가입 테스트", () => {
    it("로그인 버튼 테스트", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        cy.get('img[alt="Current User Profile Image"]').click();
        cy.contains("로그아웃").click();
    });
});
