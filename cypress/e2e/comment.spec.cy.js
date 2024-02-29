describe("댓글 테스트", () => {
    it("댓글 작성 및 버튼 테스트", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        /* ==== Generated with Cypress Studio ==== */
        cy.get("div.overflow-hidden").first().click();
        cy.get(".text-right").click();
        cy.get("input#inputCom").type(
            "cypress를 활용한 E2E 테스트를 진행하고 있습니다."
        );
        cy.get(".w-full.justify-center > .inline-flex").click();
        cy.get("#inputCom").clear("초");
        cy.get("#inputCom").type(
            "최신 순으로 정렬되는지 테스트 합니다.{enter}"
        );
        cy.get(".w-full.justify-center > .inline-flex").click();
        cy.get(":nth-child(4) > .flex > .text-xs").click();
        cy.get(".justify-start > .flex").clear();
        cy.get(".justify-start > .flex").type(
            "대댓글 테스트를 진행합니다.{enter}"
        );
        cy.get(".justify-start > .flex").clear();
        cy.get(".justify-start > .flex").type(
            "최신 순으로 정렬되는지 확인합니다.{enter}"
        );
        /* ==== End Cypress Studio ==== */
    });
});
