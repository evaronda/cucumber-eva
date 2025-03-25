Feature: Gestión de tareas

    Scenario: Agregar una tarea a la lista
        Given I open the todo application
        When I add "Tarea 1" to the list
        Then I should see "Tarea 1" in the list
    
    Scenario: Agregar una tarea y marcarla como completada
        Given I open the todo application
        When I add "Tarea 1" to the list
        And I mark "Tarea 1" as completed
        Then "Tarea 1" should be marked as completed

    Scenario: Eliminar una tarea de la lista
        Given I open the todo application
        When I add "Tarea 1" to the list
        And I delete "Tarea 1" from the list
        Then "Tarea 1" should be removed from the list

