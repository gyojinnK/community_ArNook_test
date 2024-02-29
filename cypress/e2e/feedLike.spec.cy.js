describe("게시물 좋아요 테스트", () => {
    it("좋아요 버튼 테스트", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(2) > .flex-col > .absolute").click();
        cy.get(
            ".w-full.justify-between > .flex > .select-none > .inline-flex > .text-red-600"
        ).click();
        /* ==== End Cypress Studio ==== */
    });
});
