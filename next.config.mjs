/** @type {import('next').NextConfig} */
const nextConfig = {

    // images:
    // {
    //     remotePatterns: [
    //         {protocol: "https", 
    //         hostname: "rickandmortyapi.com"}]
    // },

    rewrites: () => 
    { // retona um arr de obj
        return [
            {
                source: "/",
                destination: "/home",

            },
            {
                source: "/pagina-imc",
                destination: "/imc"
            },
            {
                source: "/pagina-media", //nome que vai aparecer na url
                destination: "/media" //nome da pasta de destino identica
            },
        ]
    }
};

export default nextConfig;
