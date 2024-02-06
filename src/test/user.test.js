"use strict";
// import { createUserController } from './create.controller';
// import { prisma } from '../../server';
// import { Request, Response } from 'express';
// describe('createUserController', () => {
//   let mockRequest: Partial<Request>;
//   let mockResponse: Partial<Response>;
//   beforeEach(() => {
//     mockRequest = {
//       body: {
//         name: 'Test User',
//         email: 'test@example.com',
//         password: 'password',
//         photo: 'photo-url',
//         phone: '123456789'
//       }
//     };
//     mockResponse = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     };
//   });
//   afterEach(async () => {
//     await prisma.users.deleteMany();
//   });
//   it('should return 201 status code and the created user', async () => {
//     await createUserController(mockRequest as Request, mockResponse as Response);
//     expect(mockResponse.status).toHaveBeenCalledWith(201);
//     expect(mockResponse.json).toHaveBeenCalled();
//   });
// });
