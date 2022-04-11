import express from 'express';
import { addBook, deleteBook, updateBook, getBook, getBooks } from '../controllers/books.js';

const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - isbn
 *       properties:
 *         title:
 *           type: String
 *           description: Title of book
 *         author:
 *           type: String
 *           description: Full name of author(s)
 *         isbn:
 *           type: Integer
 *           description: ISBN value of book
 *       example:
 *         title: "Harry Potter and the Order of the Phoenix"
 *         author: "JK Rowling"
 *         isbn:  9781408855690
 *      
 *
 */

/**
 * @swagger
 *  tags:
 *    name: Requests
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all the books in the database
 *     tags: [Requests]
 *     responses:
 *       200:
 *         description: books by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: book can not be found
 */
router.get('/', getBooks)

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *  
 *     tags: [Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */
router.post('/', addBook)

/**
 * @swagger
 * /books/{isbn}:
 *   get:
 *     summary: Get details of a specific book
 *     tags: [Requests]
 *     parameters:
 *       - in : path
 *         name: isbn
 *         description: ISBN value of book
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: books by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: books can not be found
 */

router.get(`/:isbn`, getBook)

/**
 * @swagger
 * /books/{isbn}:
 *   delete:
 *     summary: Delete a book from the database.
 *     tags: [Requests]
 *     parameters:
 *       - in : path
 *         name: isbn
 *         description: ISBN value of book
 *         schema:
 *           type: integer
 *           required: true
 *     responses:
 *       200:
 *         description: The book was deleted.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: The book can not be found.
 */
router.delete('/:isbn', deleteBook)

/**
 * @swagger
 * /books/{isbn}:
 *   patch:
 *     summary: Update details of book.
 *     tags: [Requests]
 *     parameters:
 *       - in : path
 *         name: isbn
 *         description: ISBN value of book
 *         schema:
 *           type: integer
 *           required: true
 *     requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                      - title
 *                      - author
 *                      properties:
 *                      title:
 *                          type: String
 *                      author:
 *                          type: String
 *                      example: 
 *                          title: "Harry Potter and the Order of the Phoenix"
 *                          author: "JK Rowling"
 *     responses:
 *       200:
 *         description: The book was updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: The book can not be found.
 */
router.patch('/:isbn', updateBook)

export default router;