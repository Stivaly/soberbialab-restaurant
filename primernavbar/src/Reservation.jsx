import React, { useEffect } from 'react'

const Reservation = () => {
	const containerStyle = {
		backgroundImage: "url('./images/about.png')", // Add this line to ensure the background image covers the entire container
		// Otras propiedades de estilo si es necesario
	  };
	const textStyle = {
		fontSize: '24px',
		color: 'gray',
		// Other style properties if necessary
	};
	
	const [selectedValue, setSelectedValue] = React.useState('Cantidad');

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	useEffect(() => {
		(function($) {
			$('.book_date').datepicker({
				'format': 'm/d/yyyy',
				'autoclose': true,
				'beforeShowDay': function(date) {
					var day = date.getDay();
					// Allow selecting only Saturdays
					return [day === 6, ''];
				}
			});
		
			$('.book_time').timepicker({
				timeFormat: 'HH:mm',
				interval: 30,
				minTime: '10:00',
				maxTime: '20:30',
				startTime: '10:00',
				dynamic: false,
				dropdown: true,
				scrollbar: true
			});
			$('#actividad').on('change', function () {
				var nuevaHora  = $(this).val();
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
							scrollbar: true
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
							scrollbar: true
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
							scrollbar: true
						});
						break;
				}
				$('.book_time').timepicker('setTime', nuevaHora);
			});

		})(jQuery);
	},);
	
  return (
    <>
        <div className="container">
			<div className="row no-gutters">
				<div className="col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary">
					<form action="#" className="appointment-form">
						<h3 className="mb-3">Reserva tu Mesa</h3>
						<div className="row">
							<div className="col-md-12">
								<div className="form-group">
									<input type="name" className="form-control" placeholder="Nombre"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<input type="email" className="form-control" placeholder="Correo"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<select id='actividad' className="form-control" style={{ color: 'black' }}>
										<option disabled value="">Tipo de Reserva</option>
										<option value="reservaComun">Reserva común</option>
										<option value="cenaClandestina">Reserva Cena Clandestina</option>
										<option value="reservaTaller">Reserva Taller</option>
										<option value="reservaLaboratorio">Reserva Laboratorio</option>
									</select>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<div className="input-wrap">
										<div className="icon"><span className="fa fa-calendar"></span></div>
										<input type="text" className="form-control book_date" placeholder="Fecha"/>
									</div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<div className="input-wrap">
										<div className="icon"><span className="fa fa-clock-o"></span></div>
										<input type="text" className="form-control book_time" placeholder="Hora"/>
									</div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<div className="form-field">
										<div className="select-wrap">
											<div className="icon"><span className="fa fa-chevron-down"></span></div>
											<select name="" id="" className="form-control"  value={selectedValue} onChange={handleChange}>
													<option disabled value="">Cantidad</option>
													{[...Array(8)].map((_, index) => (
														<option key={index + 1} value={index + 1}>
															{index + 1}
														</option>
													))}
												</select>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<input type="submit" value="Reservar ahora" className="btn btn-white py-3 px-4"/>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="col-sm-8 wrap-about py-6 img" style={containerStyle}>
						<div className="row pb-5 pb-md-0">
							<div className="col-md-12 col-lg-7">
							<div className="heading-section mt-5 mb-4">
								<div className="pl-lg-3 ml-md-5">
								<span className="subheading">Somos</span>
								<h2 className="mb-4">SOBERBIALAB</h2>
								</div>
							</div>
							<div className="pl-lg-3 ml-md-5 text-justify white-transparent-bg" style={textStyle}>
								Una cafetería y bistró de autor, apasionados por el café y dedicados a explorar, investigar
								y desarrollar recetas únicas. Nuestro compromiso no solo radica en ofrecer experiencias
								deliciosas, sino también en fomentar el cuidado del food zero waste, contribuyendo así
								al enfoque sostenible en nuestra cocina.
							</div>
							</div>
						</div>
					</div>
			</div>
		</div>
		
    
    </>
  )
};

export default Reservation;
