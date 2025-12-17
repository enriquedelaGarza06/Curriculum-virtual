const request = require('supertest'); // Importamos la herramienta para hacer peticiones
const app = require('../app');        // Importamos tu aplicación

describe('Pruebas Automatizadas del Portafolio', () => {
    
    // PRUEBA 1: Verificar que la página de inicio carga (Frontend)
    test('GET / debe responder con status 200 (OK)', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        // Opcional: Verificar que es un HTML
        expect(response.headers['content-type']).toMatch(/html/);
    });

    // PRUEBA 2: Verificar que la API de proyectos funciona (Backend/Data)
    test('GET /api/projects debe devolver un JSON con datos', async () => {
        const response = await request(app).get('/api/projects');
        
        // Verificaciones (Assertions)
        expect(response.statusCode).toBe(200); // 1. Que no haya error
        expect(response.headers['content-type']).toMatch(/json/); // 2. Que sea JSON
        expect(Array.isArray(response.body)).toBe(true); // 3. Que sea una lista (array)
        expect(response.body.length).toBeGreaterThan(0); // 4. Que no esté vacía
    });

});