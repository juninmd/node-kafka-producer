```markdown
# AGENTS.md Guidelines

These guidelines are designed to ensure high-quality, maintainable, and efficient development for the AGENTS repository. Adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

*   All code should have a single, well-defined purpose.
*   Avoid duplication of logic and implementation across different modules or files.
*   Refactor duplicated code into separate, reusable components.
*   Favor abstractions over direct replication.

## 2. KISS (Keep It Simple, Stupid)

*   Prioritize clarity and readability over excessive complexity.
*   Strive for minimal code; explain complex logic with comments.
*   Use appropriate data structures and algorithms for the task.
*   Avoid unnecessary abstractions.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or module should have one, and only one, reason to change.
*   **Open/Closed Principle:**  Systems should be open for extension but closed for modification.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:**  Clients should not be forced to implement interfaces they do not use.
*   **Dependency Inversion Principle:**  High-level modules should be dependent on low-level modules, and modules should be dependent on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is currently required.
*   Defer implementation of future requirements until they are explicitly needed.
*   Avoid unnecessary code or features.

## 5. Testing & Coverage

*   **All development must be productive.**  Do not use mocks or fake implementations.
*   **Mocks ONLY for tests.** Use mocks for testing the functionality *of* the agent, not for simulating real system behavior.
*   Achieve at least 80% test coverage for all files.
*   Implement unit tests thoroughly for all functions and classes.  Each function should have at least one unit test.
*   Include integration tests to verify interactions between different components.

## 6. File Limit (180 Lines)

*   Each file shall not exceed 180 lines of code.
*   Code should be formatted consistently with a minimum of 4 spaces between lines.
*   Line lengths should be kept to a reasonable maximum of 120 characters.

## 7. Code Style & Formatting

*   Follow a consistent coding style (e.g., PEP 8 for Python).
*   Use a code formatter (e.g., Black for Python) to enforce consistent formatting.
*   Include docstrings for all functions, classes, and modules.
*   Properly document all API usage.

## 8. Repository Structure

*   Modularize the codebase into logical groups.
*   Use a consistent naming convention.
*   Organize files by functionality or component.
*   Maintain a clear separation of concerns.

## 9.  Specific Considerations for AGENTS (Example - Adapt as Needed)

*   **AgentInterface:**  Define a clear interface for all agent behavior.
*   **AgentState:**  Handle agent state management effectively.
*   **AgentCommunication:** Implement a robust communication system.
*   **DataPersistence:**  Utilize a suitable persistence mechanism (e.g., database).
*   **AgentLogging:** Provide structured logging for debugging and monitoring.


```