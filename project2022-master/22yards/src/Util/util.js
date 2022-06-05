export const PostBody=(body)=>({
    method: "POST",
    credentials:"include",
    mode:"cors",
    redirect:"follow",
    body: JSON.stringify(body),
    headers: {"Content-type": "application/json; charset=UTF-8"},
})

export const PutBody=(body)=>({
    method: "PUT",
    credentials:"include",
    mode:"cors",
    redirect:"follow",
    body: JSON.stringify(body),
    headers: {"Content-type": "application/json; charset=UTF-8"},
})

export const GetBody=()=>({
    method: "GET",
    credentials:"include",
    mode:"cors",
    redirect:"follow",
    headers: {"Content-type": "application/json; charset=UTF-8"},
})

export const GetWithBody=(body)=>({
    method: "GET",
    credentials:"include",
    mode:"cors",
    redirect:"follow",
    body: JSON.stringify(body),
    headers: {"Content-type": "application/json; charset=UTF-8"},
})



export const BASE_URL="https://peaceful-plateau-21775.herokuapp.com"
// export const BASE_URL=" http://8550-103-72-178-198.ngrok.io"

export const IPLTeamLogos=[
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084160/WhatsApp_Image_2022-03-08_at_9.35.27_PM_ziy0fv.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084161/WhatsApp_Image_2022-03-08_at_9.35.27_PM_2_jhgpzl.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084160/WhatsApp_Image_2022-03-08_at_9.35.28_PM_jqf5xt.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084160/WhatsApp_Image_2022-03-08_at_9.35.27_PM_1_bxyzqo.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084160/WhatsApp_Image_2022-03-08_at_9.35.24_PM_lb40wg.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084160/WhatsApp_Image_2022-03-08_at_9.35.26_PM_1_kye4ce.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084160/WhatsApp_Image_2022-03-08_at_9.35.25_PM_yftd9j.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084160/WhatsApp_Image_2022-03-08_at_9.35.26_PM_mltqea.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084160/WhatsApp_Image_2022-03-08_at_9.35.25_PM_1_hxcp3x.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1647084159/WhatsApp_Image_2022-03-08_at_9.35.24_PM_1_ryoq2z.jpg",
]