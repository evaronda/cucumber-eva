import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the todo application", () => {
    cy.visit("https://todomvc.com/examples/react/dist/");
});

When("I add {string} to the list", (task) => {
    cy.get(".new-todo").type(task).type("{enter}");
});

Then("I should see {string} in the list", (task) => {
    cy.get(".todo-list").contains(task);
});

When("I mark {string} as completed", (task) => {
    cy.get(".todo-list").contains(task).parents("li").find('input[type="checkbox"]').check({force: true});

});

Then("{string} should be marked as completed", (task) => {
    cy.get(".todo-list")
      .contains(task)
      .parents("li")
      .should("have.class", "completed");
});

When("I delete {string} from the list", (task) => {
    cy.get(".todo-list")
      .contains(task)
      .parents("li")
      .find(".destroy")
      .click({ force: true });
});

Then("{string} should be removed from the list", (task) => {
    cy.get(".todo-list")
      .should("not.contain", task);
});




