import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Typography, Card, CardContent, CardMedia, CardActions } from "@mui/material";

import BookingForm from "./BookingForm";

const fetchHotel = async (id) => {
    try {
        const res = await fetch(`http://localhost:3001/hotels/${id}`);
        if (!res.ok) {
            throw new Error("La respuesta de la red no está OK.");
        }
        return res.json();
    } catch (error) {
        console.error("Error en fetchHotel:", error);
        throw error;
    }
};

function HotelDetails() {
    const [match, params] = useRoute("/hotel/:id");

    const {
        data: hotel,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["hotel", params?.id],
        queryFn: () => params?.id ? fetchHotel(params.id) : null,
        onSuccess: (data) => console.log("Datos obtenidos:", data),
        onError: (err) => console.error("Error en fetch:", err),
        enabled: !!match && !!params?.id,
    });

    if (!match) {
        return <div>No se encontró la ruta para el hotel.</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error de datos en el fetching: {error.message}</div>;
    }

    if (!hotel) {
        return <div>No se encontraron datos para el hotel.</div>;
    }

    console.log("Imagen del hotel:", hotel.image);

    return (
        <Card sx={{ maxWidth: 354, backgroundColor: "#e8e8e8" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={hotel.image.startsWith('/') ? hotel.image : `/${hotel.image}`} 
                title={hotel.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {hotel.name || "Nombre del Hotel"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {hotel.description || "Descripción del hotel no disponible."}
                </Typography>
            </CardContent>
            <CardActions>
                {/* Formulario aquí */}
                <BookingForm hotel={hotel}/>
            </CardActions>
        </Card>
    );
}

export default HotelDetails;
