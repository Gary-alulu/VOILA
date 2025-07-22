describe('Authentication and Authorization Tests', () => {
  beforeEach(() => {
    // Clear cookies and local storage before each test to ensure a clean state
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should allow a regular user to log in and access user-specific content', () => {
    // Visit the login page
    cy.visit('/login');

    // Enter user credentials (replace with actual user data)
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that the user is redirected to a user dashboard or homepage
    cy.url().should('include', '/dashboard'); // Adjust this based on your app's redirect

    // Assert that user-specific content is visible
    cy.contains('Welcome, User!').should('be.visible'); // Adjust based on your user dashboard content

    // Attempt to access admin-specific content and assert redirection to unauthorized page
    cy.visit('/admin');
    cy.url().should('include', '/unauthorized');
    cy.contains('Unauthorized Access').should('be.visible');
  });

  it('should allow an admin user to log in and access admin-specific content', () => {
    // Visit the login page
    cy.visit('/login');

    // Enter admin credentials (replace with actual admin data)
    cy.get('input[name="email"]').type('admin@example.com');
    cy.get('input[name="password"]').type('adminpassword');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that the admin is redirected to the admin dashboard
    cy.url().should('include', '/admin');

    // Assert that admin-specific content is visible
    cy.contains('Welcome to the Admin Dashboard').should('be.visible');

    // Attempt to access a protected admin API route (if applicable)
    // This would typically involve making a request and asserting the response
    // For example:
    // cy.request('/api/admin/data').then((response) => {
    //   expect(response.status).to.eq(200);
    //   expect(response.body).to.have.property('totalUsers');
    // });
  });

  it('should prevent unauthorized access to protected routes', () => {
    // Attempt to visit a protected user route without logging in
    cy.visit('/dashboard');
    cy.url().should('include', '/login'); // Or wherever unauthorized users are redirected

    // Attempt to visit a protected admin route without logging in
    cy.visit('/admin');
    cy.url().should('include', '/login'); // Or wherever unauthorized users are redirected
  });

  it('should log out the user successfully', () => {
    // First, log in a user (can be admin or regular user)
    cy.visit('/login');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');

    // Click the logout button (adjust selector as needed)
    cy.get('button[name="logout"]').click(); // Assuming a logout button with name 'logout'

    // Assert that the user is redirected to the login page or homepage
    cy.url().should('include', '/login');

    // Assert that protected content is no longer accessible
    cy.visit('/dashboard');
    cy.url().should('include', '/login');
  });
});