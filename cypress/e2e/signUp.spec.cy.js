describe("사용자 회원가입 테스트", () => {
    it("로그인 버튼 테스트", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        cy.contains("회원가입").click();
        cy.get("#inputFile").attachFile("201944012.png");
        cy.get("input[name='email']").type("example@email.com");
        cy.get('input[name="password"]').type("example123$");
        cy.get('input[name="passwordCheck"]').type("example123$");
        cy.get('input[name="nickname"]').type("exampleTestNick");
        cy.get('input[name="greet"]').type("hi~ example greet!");
        cy.contains("가입하기").click();
    });
});
