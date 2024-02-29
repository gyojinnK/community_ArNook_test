describe("팔로우 테스트", () => {
    it("팔로잉 테스트", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        cy.get('img[alt="group"]').click();
        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(2) > .flex-col").click();
        cy.contains("팔로우").click();
        /* ==== End Cypress Studio ==== */
    });
});
