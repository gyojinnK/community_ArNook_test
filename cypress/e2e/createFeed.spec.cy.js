describe("게시물 생성 테스트", () => {
    it("게시물 생성(이미지, 외부링크)", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        cy.contains("게시물").click();
        cy.get('input[placeholder="제목"]').type("cypress 테스트 게시물 생성");

        cy.get('input[placeholder="태그를 입력해주세요. 클릭하면 삭제합니다."]')
            .type("테스트{enter}")
            .type("테스트1{enter}")
            .type("테스트2{enter}")
            .type("테스트3{enter}")
            .type("테스트4{enter}");

        cy.contains("테스트3").click();
        cy.contains("테스트4").click();

        cy.get("textarea").type(
            "cypress 테스트를 이용하여 작성한 게시물입니다. \n" +
                "이는 테스트 자동화를 위한 작업이며 게시물이 정상적으로 작성되는지 확인합니다."
        );

        cy.contains("썸네일 첨부하기").click();
        cy.get("#inputFile").attachFile("201944012.png");

        cy.contains("링크 추가하기").click();
        cy.get("input").last().type("https://d3m8ut08h35g18.cloudfront.net/");

        cy.contains("게시하기").click();
    });

    it("게시물 생성(썸네일)", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        cy.contains("게시물").click();
        cy.get('input[placeholder="제목"]').type("cypress 테스트 게시물 생성");

        cy.get('input[placeholder="태그를 입력해주세요. 클릭하면 삭제합니다."]')
            .type("테스트{enter}")
            .type("테스트1{enter}")
            .type("테스트2{enter}")
            .type("테스트3{enter}")
            .type("테스트4{enter}");

        cy.contains("테스트3").click();
        cy.contains("테스트4").click();

        cy.get("textarea").type(
            "cypress 테스트를 이용하여 작성한 게시물입니다. \n" +
                "이는 테스트 자동화를 위한 작업이며 게시물이 정상적으로 작성되는지 확인합니다."
        );

        cy.contains("썸네일 첨부하기").click();
        cy.get("#inputFile").attachFile("201944012.png");

        cy.contains("게시하기").click();
    });

    it("게시물 생성(외부링크)", () => {
        cy.visit("https://d3m8ut08h35g18.cloudfront.net/");
        cy.contains("게시물").click();
        cy.get('input[placeholder="제목"]').type("cypress 테스트 게시물 생성");

        cy.get('input[placeholder="태그를 입력해주세요. 클릭하면 삭제합니다."]')
            .type("테스트{enter}")
            .type("테스트1{enter}")
            .type("테스트2{enter}")
            .type("테스트3{enter}")
            .type("테스트4{enter}");

        cy.contains("테스트3").click();
        cy.contains("테스트4").click();

        cy.get("textarea").type(
            "cypress 테스트를 이용하여 작성한 게시물입니다. \n" +
                "이는 테스트 자동화를 위한 작업이며 게시물이 정상적으로 작성되는지 확인합니다."
        );

        cy.contains("링크 추가하기").click();
        cy.get("input").last().type("https://d3m8ut08h35g18.cloudfront.net/");

        cy.contains("게시하기").click();
    });
});
