
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Apartment = () => {
    const location = useLocation();
    const product = location.state?.product; // קבלת נתוני המוצר

    if (!product) {
        return <div>לא נמצאו פרטים על המוצר</div>;
    }

    return (
        <div className="flex justify-content-center align-items-center h-screen" style={{ position: 'relative' }}>
            <Card style={{ width: '90%', maxWidth: '1200px', padding: '1rem', position: 'relative',backgroundColor: '#CBA9E5' }}>
                <div className="flex flex-row align-items-start gap-4">
                    <div className="flex flex-column justify-content-center" style={{ flex: 1 }}>
                        <img
                            alt="תמונה לא נמצאה"
                            src={`https://primefaces.org/cdn/primereact/images/product/${product.img}`}
                            style={{ width: '100%', borderRadius: '10px', maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="flex flex-column" style={{ flex: 2 }}>
                        <h2>{`${product.size} מ"ר, ${product.numOfRooms} חדרים`}</h2>
                        <h4>{`${product.address.city},${product.address.neighborhood ? product.address.neighborhood : ''}, ${product.address.street} ${product.address.building}`}</h4>
                        <div className="p-mb-3">
                            <h3>תיאור:</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className="p-mb-3">
                            <h3>תיאור:</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className="p-mb-3">
                            <h3>תיאור:</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className="p-mb-3">
                            <h3>מחיר:</h3>
                            <p>₪{product.price}</p>
                        </div>
                        <div className="p-mb-3">
                            <h3>יצירת קשר:</h3>
                            <p>{product.user.phone}</p>
                            {/* <p>{product.user.email}</p> */}
                        </div>
                    </div>
                </div>

                {/* כפתור חזור */}
                <Button
                    label="חזור"
                    icon="pi pi-arrow-left"
                    className="p-button-sm"
                    style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                    }}
                    onClick={() => window.history.back()}
                />
            </Card>
        </div>
    );
};

export default Apartment;


