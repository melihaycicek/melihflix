import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance;

//instance.get('/foo-bar'); //Bu kısım baseURL mize eklenir.

/*Axios, client side uygulamalarda HTTP çağrılarının 
kolayca yapılmasını sağlayan bir javascript 
kütüphanesidir.    


nesne tabanlı (oob) programlamada bir nesnenin 
instance ını oluşturmak bir örneğini yaratmak demektir
. Mesela; bir masa(table) objemiz olsun. Her instance
 ını yarattığımızda bu objenin birebir aynı özelliğe 
 sahip bir çok örnekleri oluşturmuş olursunuz.   

Ürettiğiniz örnek objenin üzerinde istediğinizi 
yapabilirsiniz. Masayı bir yemek masası, toplantı 
masası, çoçuk masası vs. özelliği katabilmek için 
özelliklerini daha sonrasında setleyebilirsiniz.*/