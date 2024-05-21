import { useState } from "react";

export const useForm = (initialForm = "") => {
  // useState es un hook que permite manejar el estado de un componente funcional
  // Sirve para manejar el estado de los inputs, en este caso se inicializa con valores por defecto vacios
  const [formState, setFormState] = useState(initialForm);

  // Función que se ejecuta cada vez que se cambia el valor de un input
  // Recibe un evento (target) y actualiza el estado del formulario
  // Se desestructura el objeto target para obtener el name y el value del input
  // Se utiliza el operador spread para mantener los valores anteriores y solo cambiar el valor del input que se modificó
  // Para que se modifique la key se tiene que usar corchetes
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
