import toast from "react-hot-toast";
import {  useForm } from "react-hook-form";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Box, Typography} from "@mui/material";
import useStore from "../store";



import PropTypes from 'prop-types';

function BookingForm({ hotel }) {
    // Inicializa react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    
    // Obtiene la función addReservation del estado global
    const addReservation = useStore((state) => state.addReservation);

    // Maneja el envío del formulario
    const onSubmit = (data) => {
        addReservation(hotel, data); // Llama a la función para añadir la reserva
        toast.success("La reservación se completó correctamente"); // Muestra un mensaje de éxito
    };

    return (
        // Componente Box de Material-UI usado como formulario
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)} // Maneja el envío del formulario
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, border: '1px solid #ddd', borderRadius: 1, backgroundColor: '#f9f9f9' }}
        >
            <Typography variant="h6" component="h2">
                Reserva tu estancia
            </Typography>
            {/* Campo de entrada para la fecha de inicio */}
            <Input
                type="date"
                {...register("startDate", { required: true })} // Registra el campo con react-hook-form
                sx={{ mb: 1 }} // Estilo para el margen inferior
                placeholder="Fecha de inicio" // Placeholder para la fecha de inicio
            />
            {/* Muestra mensaje de error si la fecha de inicio no está completa */}
            {errors.startDate && (
                <Typography color="error" variant="body2">La fecha de inicio es requerida</Typography>
            )}
            {/* Campo de entrada para la fecha de fin */}
            <Input
                type="date"
                {...register("endDate", { required: true })} // Registra el campo con react-hook-form
                sx={{ mb: 1 }} // Estilo para el margen inferior
                placeholder="Fecha de fin" // Placeholder para la fecha de fin
            />
            {/* Muestra mensaje de error si la fecha de fin no está completa */}
            {errors.endDate && (
                <Typography color="error" variant="body2">La fecha de fin es requerida</Typography>
            )}
            {/* Botón para enviar el formulario */}
            <Button
                variant="contained"
                type="submit"
                sx={{ alignSelf: 'center', mt: 2 }} // Estilo para centrar el botón y añadir margen superior
            >
                Hacer Reserva
            </Button>
        </Box>
    );
}

BookingForm.propTypes = {
    hotel: PropTypes.object.isRequired,
};

export default BookingForm;



