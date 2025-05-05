
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { Galleria } from 'primereact/galleria';
// import { Divider } from 'primereact/divider';

// const Apartment = () => {
//     const location = useLocation();
//     const product = location.state?.product; // קבלת נתוני המוצר

//     const [images, setImages] = useState([]); // אחסון התמונות בגלריה

//     const responsiveOptions = [
//         {
//             breakpoint: '1024px',
//             numVisible: 5
//         },
//         {
//             breakpoint: '960px',
//             numVisible: 4
//         },
//         {
//             breakpoint: '768px',
//             numVisible: 3
//         },
//         {
//             breakpoint: '560px',
//             numVisible: 1
//         }
//     ];

//     useEffect(() => {
//         if (product?.img) {
//             const formattedImages = product.img.map((image) => ({
//                 itemImageSrc: `http://localhost:8000/uploads/${image}`,
//                 thumbnailImageSrc: `http://localhost:8000/uploads/${image}`,
//                 alt: 'תמונת דירה',
//             }));
//             setImages(formattedImages);
//         }
//     }, [product]);

//     if (!product) {
//         return <div className="text-center p-4">לא נמצאו פרטים על המוצר</div>;
//     }

//     // תבנית לתמונה המלאה
//     const itemTemplate = (item) => (
//         <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <img 
//                 src={item.itemImageSrc} 
//                 alt={item.alt} 
//                 style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover', // שמירה על פרופורציות
//                     borderRadius: '8px'
//                 }} 
//             />
//         </div>
//     );

//     // תבנית לתמונה ממוזערת
//     const thumbnailTemplate = (item) => (
//         <img 
//             src={item.thumbnailImageSrc} 
//             alt={item.alt} 
//             style={{
//                 width: '60px', // רוחב קטן עבור התמונות הממוזערות
//                 height: '60px', // גובה קטן עבור התמונות הממוזערות
//                 objectFit: 'cover', // שומר פרופורציות ומונע חיתוך
//                 borderRadius: '4px' // פינות מעוגלות
//             }} 
//         />
//     );

//     return (
//         <div className="flex justify-content-center align-items-center min-h-screen p-4">
//             <Card 
//                 style={{ width: '90%', maxWidth: '1200px', backgroundColor: '#f8f9fa' }}
//                 header={
//                     <div className="flex justify-content-between align-items-center">
//                         <h2>{`${product.size} מ"ר, ${product.numOfRooms} חדרים`}</h2>
//                         <Button
//                             label="חזור"
//                             icon="pi pi-arrow-left"
//                             className="p-button-sm p-button-secondary"
//                             onClick={() => window.history.back()}
//                         />
//                     </div>
//                 }
//                 footer={
//                     <div className="flex flex-column align-items-center">
//                         <Divider />
//                         <h3>מחיר:</h3>
//                         <p className="text-2xl font-bold">₪{product.price.toLocaleString()}</p>
//                     </div>
//                 }
//             >
//                 {/* מבנה Grid עם שתי עמודות */}
//                 <div 
//                     style={{ 
//                         display: 'grid', 
//                         gridTemplateColumns: '1fr 1fr', // 2 עמודות שוות
//                         gap: '20px', // רווח בין העמודות
//                         alignItems: 'start', // יישור תוכן למעלה
//                         border: '1px solid #ddd', // קו מסגרת ברור
//                         padding: '10px'
//                     }}
//                 >
//                     {/* עמודה ימנית – גלריית תמונות */}
//                     <div 
//                         style={{ 
//                             borderRight: '1px solid #ddd', 
//                             paddingRight: '20px', 
//                             height: '100%' 
//                         }}
//                     >
//                         <h3>תמונות:</h3>
//                         <Galleria 
//                             value={images}
//                             responsiveOptions={responsiveOptions}
//                             numVisible={5}
//                             circular
//                             style={{ maxWidth: '100%' }}
//                             showItemNavigators
//                             showThumbnails
//                             item={itemTemplate}
//                             thumbnail={thumbnailTemplate}
//                         />
//                     </div>

//                     {/* עמודה שמאלית – פרטי הדירה */}
//                     <div style={{ paddingLeft: '20px' }}>
//                         <h3>פרטי הדירה:</h3>
//                         <Divider />
//                         <div className="grid">
//                             <div className="col-12 md:col-6">
//                                 <p><strong>עיר:</strong> {product.address.city}</p>
//                                 <p><strong>שכונה:</strong> {product.address.neighborhood || 'לא צוינה'}</p>
//                                 <p><strong>רחוב:</strong> {product.address.street}</p>
//                                 <p><strong>בניין:</strong> {product.address.building}</p>
//                             </div>
//                             <div className="col-12 md:col-6">
//                                 <p><strong>קומה:</strong> {product.floor || 'לא צוינה'}</p>
//                                 <p><strong>גודל:</strong> {product.size} מ"ר</p>
//                                 <p><strong>חדרים:</strong> {product.numOfRooms}</p>
//                                 <p>
//                                     <strong>כיווני אוויר:</strong> {Array.isArray(product.airDirections) && product.airDirections.length > 0 
//                                         ? product.airDirections.join(', ') 
//                                         : 'לא צוינו כיווני אוויר'}
//                                 </p>
//                             </div>
//                         </div>

//                         {/* תיאור */}
//                         <h3>תיאור:</h3>
//                         <Divider />
//                         <p>{product.description || 'לא סופק תיאור.'}</p>

//                         {/* אפשרויות נוספות */}
//                         <h3>אופציות נוספות:</h3>
//                         <Divider />
//                         <p>{product.options?.join(', ') || 'לא צוינו אפשרויות נוספות.'}</p>

//                         {/* יצירת קשר */}
//                         <h3>יצירת קשר:</h3>
//                         <Divider />
//                         <p><strong>טלפון:</strong> {product.user?.phone || 'לא סופק מספר טלפון'}</p>
//                     </div>
//                 </div>
//             </Card>
//         </div>
//     );
// };

// export default Apartment;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { Divider } from 'primereact/divider';

const Apartment = () => {
    const location = useLocation();
    const product = location.state?.product; // קבלת נתוני המוצר

    const [images, setImages] = useState([]); // אחסון התמונות בגלריה

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        if (product?.img && product.img.length > 0) {
            const formattedImages = product.img.map((image) => ({
                itemImageSrc: `http://localhost:8000/uploads/${image}`,
                thumbnailImageSrc: `http://localhost:8000/uploads/${image}`,
                alt: 'תמונת דירה',
            }));
            setImages(formattedImages);
        }
    }, []);

    if (!product) {
        return <div className="text-center p-4">לא נמצאו פרטים על המוצר</div>;
    }

    // תבנית לתמונה המלאה
    const itemTemplate = (item) => (
        <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // שמירה על פרופורציות
                    borderRadius: '8px'
                }}
            />
        </div>
    );

    // תבנית לתמונה ממוזערת
    const thumbnailTemplate = (item) => (
        <img
            src={item.thumbnailImageSrc}
            alt={item.alt}
            style={{
                width: '60px', // רוחב קטן עבור התמונות הממוזערות
                height: '60px', // גובה קטן עבור התמונות הממוזערות
                objectFit: 'cover', // שומר פרופורציות ומונע חיתוך
                borderRadius: '4px' // פינות מעוגלות
            }}
        />
    );

    return (
        <div className="flex justify-content-center align-items-center min-h-screen p-4">
            <Card
                style={{ width: '90%', maxWidth: '1200px', backgroundColor: '#f8f9fa' }}
                header={
                    <div className="flex justify-content-between align-items-center">
                        <h2>{`${product.size} מ"ר, ${product.numOfRooms} חדרים`}</h2>
                        <Button
                            label="חזור"
                            icon="pi pi-arrow-left"
                            className="p-button-sm p-button-secondary"
                            onClick={() => window.history.back()}
                        />
                    </div>
                }
                footer={
                    <div className="flex flex-column align-items-center">
                        <Divider />
                        <h3>מחיר:</h3>
                        <p className="text-2xl font-bold">₪{product.price.toLocaleString()}</p>
                    </div>
                }
            >
                {/* מבנה Grid עם שתי עמודות */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr', // 2 עמודות שוות
                        gap: '20px', // רווח בין העמודות
                        alignItems: 'start', // יישור תוכן למעלה
                        border: '1px solid #ddd', // קו מסגרת ברור
                        padding: '10px'
                    }}
                >
                    {/* עמודה ימנית – גלריית תמונות */}
                    <div
                        style={{
                            borderRight: '1px solid #ddd',
                            paddingRight: '20px',
                            height: '100%'
                        }}
                    >
                        <h3>תמונות:</h3>
                        {images.length > 0 ? (
                            <Galleria
                                value={images}
                                responsiveOptions={responsiveOptions}
                                numVisible={5}
                                circular
                                style={{ maxWidth: '100%' }}
                                showItemNavigators
                                showThumbnails
                                item={itemTemplate}
                                thumbnail={thumbnailTemplate}
                            />
                        ) : (
                            <p>אין תמונה</p> // הצגת הודעה אם אין תמונות
                        )}
                    </div>

                    {/* עמודה שמאלית – פרטי הדירה */}
                    <div style={{ paddingLeft: '20px' }}>
                        <h3>פרטי הדירה:</h3>
                        <Divider />
                        <div className="grid">
                            <div className="col-12 md:col-6">
                                <p><strong>עיר:</strong> {product.address.city}</p>
                                <p><strong>שכונה:</strong> {product.address.neighborhood || 'לא צוינה'}</p>
                                <p><strong>רחוב:</strong> {product.address.street}</p>
                                <p><strong>בניין:</strong> {product.address.building}</p>
                            </div>
                            <div className="col-12 md:col-6">
                                <p><strong>קומה:</strong> {product.floor || 'לא צוינה'}</p>
                                <p><strong>גודל:</strong> {product.size} מ"ר</p>
                                <p><strong>חדרים:</strong> {product.numOfRooms}</p>
                                {/* <p>
                                    <strong>כיווני אוויר:</strong> {Array.isArray(product.airDirections) && product.airDirections.length > 0
                                        ? product.airDirections.join(', ')
                                        : 'לא צוינו כיווני אוויר'}
                                </p> */}
                                  <p>
                                    <strong>כיווני אוויר:</strong> {product.airDirections  || 'לא צוינו כיווני אוויר'}
                                </p>
                            </div>
                        </div>

                        {/* תיאור */}
                        <h3>תיאור:</h3>
                        <Divider />
                        <p>{product.description || 'לא סופק תיאור.'}</p>

                        {/* אפשרויות נוספות */}
                        <h3>אופציות נוספות:</h3>
                        <Divider />
                        <p>{product.options?.join(', ') || 'לא צוינו אפשרויות נוספות.'}</p>
                        <Divider />
                        {/* יצירת קשר */}
                        <h3>יצירת קשר:</h3>
                        <Divider />

                        <p><strong>טלפון:</strong> {product.user.phone || 'לא סופק מספר טלפון'}</p>
                        
                        <p><strong>מייל:</strong> {product.user.email || 'לא סופק דואר אלקטרוני'}</p>
                        
                        {/* <p><strong>כתובת:</strong> {`${product.user.address.city}, ${product.user.address.street} ${product.user.address.building}` || 'לא סופק דואר אלקטרוני'}</p> */}

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Apartment;