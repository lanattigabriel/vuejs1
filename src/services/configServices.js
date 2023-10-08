import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://6483cc78ee799e3216261ce6.mockapi.io/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async deleteProduct(id) {
        try{
            await apiClient.delete(`/products/${id}`)
        }catch(e){
            throw new Error("Error at trying to delete a product") 
        }
    },
    async loadProducts(){
        try{
            const response = await apiClient.get('/products');
            return response.data
        } catch(e) {
            throw "Error with the load";
        }
    },
    async addProduct(product){
        try{
            await apiClient.post('/products', product)
        }catch(e) {
            throw "Error at adding a product"
        }
    },
    async updateProduct(id, elem){
        try{
            await apiClient.put(`/products/${id}`, elem)
        }catch(e){
            throw "Error at updating a product"
        }
    },
    async getProductById(id){
        try{
            const product = await apiClient.get(`/products/${id}`);
            return product.data
        } catch(e) {
            throw "Error with the getting the product";
        }
    }
}