describe("사용자 인증 테스트", () => {
    it("로그인 버튼 테스트", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        // cy.get("input").first().type("test@gmail.com");
        // cy.get("input").last().type("test123$");
        cy.get("button[type=submit]").click();
    });
});
