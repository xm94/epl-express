import { Request, Response } from 'express';

import pool from '../db';

export const getProducts = async (req: Request, res: Response) => {
    let products: any[] = [];

    let table = "bryan_students";

    const dbResult = await pool.query(`SELECT * FROM ${table}`);

    products = dbResult.rows;
    return res.status(200).json(products);

}

export const insertProduct = async (req: Request, res: Response) => {
    let { product_name, description, price, quantity } = req.body;

    const dbResult =
        await pool.query(
            `INSERT INTO products (product_name, description,price,quantity) VALUES `
            + `('${product_name}','${description}',${price},${quantity}) RETURNING *;`
        );

    return res.status(201).json(dbResult.rows);
}

export const updateProduct = async (req: Request, res: Response) => {
    let id = req.params.id;
    let { product_name, description, price, quantity } = req.body;

    const dbResult =
        await pool.query(
            `UPDATE products SET product_name = '${product_name}', ` +
            `description = '${description}', price = ${price}, quantity = ${quantity} `
            +`WHERE product_id = ${id} RETURNING *;`
        );

    return res.status(200).json(dbResult.rows);
}

export const deleteProduct = async (req: Request, res: Response) => {
    let id = req.params.id;

    const dbResult = await pool.query(`DELETE FROM products WHERE product_id=${id};`);


    return res.status(200).json(dbResult.rowCount);

}
