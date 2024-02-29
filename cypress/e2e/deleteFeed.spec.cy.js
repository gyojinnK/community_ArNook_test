describe("게시물 삭제 테스트", () => {
    it("게시물 삭제", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        cy.get('img[alt="my page"]').click();
        cy.get("div[type=button]").first().click();

        cy.get("div[role=dialog] svg").first().click();
        cy.contains("삭제하기").click();
        cy.contains("네. 지금 삭제할게요.").click();
    });
});
