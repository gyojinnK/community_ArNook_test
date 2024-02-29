describe("게시물 수정 테스트", () => {
    it("게시물 수정", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        cy.get('img[alt="my page"]').click();
        cy.get("div[type=button]").first().click();

        cy.get("div[role=dialog] svg").first().click();
        cy.contains("수정하기").click();

        cy.get('input[name="postTitle"]').type("cypress 테스트 게시물 수정");
        cy.get('input[placeholder="태그를 입력해주세요. 클릭하면 삭제합니다."]')
            .type("테스트3{enter}")
            .type("테스트4{enter}");

        cy.contains("테스트4").click();

        cy.get("textarea").type(
            "cypress 테스트를 이용하여 작성한 게시물을 수정하는 수정 테스트 입니다. \n" +
                "이는 테스트 자동화를 위한 작업이며 게시물이 정상적으로 작성되고 수정되는지 확인합니다."
        );

        cy.contains("썸네일 이미지 선택").click();
        cy.get("#inputFile").attachFile("201944012.png");

        cy.get("button[type=submit]").click();
    });
});
