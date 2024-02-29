describe("모든 페이지 방문", () => {
    it("라우팅 테스트", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        cy.contains("게시물").click();
        cy.get('img[alt="home"]').click();
        cy.get('img[alt="group"]').click();
        cy.get('img[alt="my page"]').click();
        cy.get('img[alt="home"]').click();
        cy.get('img[alt="Current User Profile Image"]').click();
        cy.contains("마이페이지").click();
    });
});
