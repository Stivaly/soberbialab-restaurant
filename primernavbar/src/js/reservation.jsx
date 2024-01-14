import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    res_cliente: '',
    res_correo: '',
    res_actividad: '',
    res_fecha_reserva: '',
    res_hora_reserva: '',
    res_cantidad_total: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contenido de formData:', formData);

    // Aquí puedes realizar tu lógica de envío mediante AJAX o utilizar una librería como Axios.
    // Ejemplo de cómo podrías realizar una petición con Axios:
    axios
      .post('/', formData)
      .then((response) => {
        if (response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl;
        }
      })
      .catch((error) => {
        console.error('Error en la solicitud AJAX:', error);
        if (error.response && error.response.status === 400) {
          console.error('Validation errors:', error.response.data.error);
          Object.entries(error.response.data.error).forEach(([key, value]) => {
            console.error(`${key}: ${value}`);
          });
        }
      });
  };

  useEffect = () => function () {
    // Coloca aquí el código que estaba dentro del useEffect
    $('#actividad').on('change', function () {
      var nuevaHora = $(this).val();
      var tipoActividad = nuevaHora;
      switch (tipoActividad) {
        case 'reservaComun':
          $('.book_time').timepicker('destroy');
          $('.book_time').timepicker({
            timeFormat: 'HH:mm',
            interval: 30,
            minTime: '10:00',
            maxTime: '20:30',
            startTime: '10:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true,
          });
          break;
        case 'cenaClandestina':
          $('.book_time').timepicker('destroy');
          $('.book_time').timepicker({
            timeFormat: 'HH:mm',
            interval: 30,
            minTime: '20:00',
            maxTime: '20:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true,
          });
          break;
        case 'reservaTaller':
        case 'reservaLaboratorio':
          $('.book_time').timepicker('destroy');
          $('.book_time').timepicker({
            timeFormat: 'HH:mm',
            interval: 30,
            minTime: '16:00',
            maxTime: '16:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true,
          });
          break;
      }
      $('.book_time').timepicker('setTime', nuevaHora);
    });
    $('#res_hora_reserva').timepicker();

    $('#res_fecha_reserva').datepicker({
      dateFormat: 'yy-mm-dd',
      minDate: 0,
      maxDate: '+1w',
      showOtherMonths: true,
      selectOtherMonths: true,
      changeMonth: true,
      changeYear: true
    });
  };

    return ( 
      React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row no-gutters" },
        React.createElement(
          "div",
          { className: "col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-reservation" },
          React.createElement(
            "form",
            { onSubmit: this.handleFormSubmit, className: "appointment-form" },
            React.createElement(
              "h3",
              { className: "mb-3" },
              "Reserva tu mesa"
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement(
                    "label",
                    { htmlFor: "res_cliente" },
                    "Nombre"
                  ),
                  React.createElement("input", {
                    type: "name",
                    className: "form-control",
                    placeholder: "Nombre",
                    name: "res_cliente",
                    id: "res_cliente",
                    value: this.state.formData.res_cliente,
                    onChange: this.handleInputChange,
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement(
                    "label",
                    { htmlFor: "res_correo" },
                    "Correo"
                  ),
                  React.createElement("input", {
                    type: "email",
                    className: "form-control",
                    placeholder: "Correo",
                    name: "res_correo",
                    id: "res_correo",
                    value: this.state.formData.res_correo,
                    onChange: this.handleInputChange,
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement(
                    "label",
                    { htmlFor: "res_actividad" },
                    "Actividad"
                  ),
                  React.createElement("input", {
                    type: "text",
                    className: "form-control",
                    placeholder: "Actividad",
                    name: "res_actividad",
                    id: "res_actividad",
                    value: this.state.formData.res_actividad,
                    onChange: this.handleInputChange,
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement(
                    "label",
                    { htmlFor: "res_fecha_reserva" },
                    "Fecha"
                  ),
                  React.createElement("input", {
                    type: "text",
                    className: "form-control",
                    placeholder: "Fecha",
                    name: "res_fecha_reserva",
                    id: "res_fecha_reserva",
                    value: this.state.formData.res_fecha_reserva,
                    onChange: this.handleInputChange,
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement(
                    "label",
                    { htmlFor: "res_hora_reserva" },
                    "Hora"
                  ),
                  React.createElement("input", {
                    type: "text",
                    className: "form-control",
                    placeholder: "Hora",
                    name: "res_hora_reserva",
                    id: "res_hora_reserva",
                    value: this.state.formData.res_hora_reserva,
                    onChange: this.handleInputChange,
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement(
                    "label",
                    { htmlFor: "res_cantidad_total" },
                    "Cantidad"
                  ),
                  React.createElement(
                    "select",
                    {
                      className: "form-control",
                      name: "res_cantidad_total",
                      id: "res_cantidad_total",
                      value: this.state.formData.res_cantidad_total,
                      onChange: this.handleInputChange,
                    },
                    [...Array(8)].map((_, index) =>
                      React.createElement(
                        "option",
                        { key: index + 1, value: index + 1 },
                        index + 1
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              "button",
              { type: "submit", className: "btn btn-primary" },
              "Reservar"
            )
          )
        )
      )
    ),
    );


ReactDOM.render(
  React.createElement(ReservationForm),
  document.getElementById("reservation")
);

module.exports = ReservationForm;
;

