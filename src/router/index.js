import { Router } from "express";
import { productsTest } from "../controller/testController.js";
import { getAllProductsController,getOneProductController, postNewProduct } from "../controller/productsController.js";
import { cartControllerGet, cartControllerPost, cartControllerProductsPost, cartControllerDelete, cartControllerProductDelete } from "../controller/cartController.js";
import { loginController } from "../controller/loginController.js";
import { loggedSuccesController } from "../controller/loggedSuccesController.js";
import { logginMiddleware } from "../middleware/logginMiddleware.js";
import { logOutController } from "../controller/logoutController.js";

const router = Router()

//Rutas Test
router.get('/products-test', productsTest)

//Rutas Login-Loguot
router.get('/login', loginController)
router.get('/loginSucces', loggedSuccesController )
router.get('/logout', logginMiddleware, logOutController)

//Rutas de Producto
router.get('/products/all', logginMiddleware, getAllProductsController)
router.get('/products/:id', logginMiddleware, getOneProductController)
router.post('/products', logginMiddleware, postNewProduct )

//Rutas de carritos
router.get('/carts/:id/products', cartControllerGet)
router.post('/carts', cartControllerPost)
router.post('/carts/:id/products', cartControllerProductsPost)
router.delete('/carts/:id', cartControllerDelete)
router.delete('/carts/:id/products/:id_prod', cartControllerProductDelete)

export default router