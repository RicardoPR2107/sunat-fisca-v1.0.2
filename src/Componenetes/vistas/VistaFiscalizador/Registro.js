import React, { useState, useEffect } from "react";
import "./Registro.css";
import "./ModalRegistro.css";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { Close } from '@mui/icons-material';
import "@fontsource/nunito";
import { getActivityTypes } from '../../../services/activityTypesService';

const Registrar = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [description, setDescription] = useState("");
  const [activityTypes, setActivityTypes] = useState([]);

  useEffect(() => {
    const loadActivityTypes = async () => {
      const types = await getActivityTypes();
      setActivityTypes(types);
    };
    loadActivityTypes();
  }, []);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedActivity("");
    setDescription("");
  };

  const handleAdd = () => {
    // Aquí irá la lógica para añadir el registro
    handleCloseModal();
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === activities.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(
        activities.map((activity, index) => activity.id + index)
      );
    }
  };

  // Funciones del calendario
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const formatDate = (date) => {
    const months = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSameDay = (date1, date2) => {
    return date1.toDateString() === date2.toDateString();
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const handleTodayClick = () => {
    const today = new Date();
    setSelectedDate(today);
    setCurrentMonth(today);
    setShowDatePicker(false);
  };

  const handlePrevDate = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setSelectedDate(prevDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setSelectedDate(nextDate);
  };

  const activities = [
    {
      id: "01",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
    {
      id: "02",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
    {
      id: "03",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
    {
      id: "04",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
    {
      id: "05",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
    {
      id: "06",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
    {
      id: "07",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
    {
      id: "08",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
    {
      id: "09",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
    {
      id: "10",
      tarea: "Inspecciones Laborales",
      descripcion: "MZA. L1 LOTE 14 VILLA MARÍA...",
      fechaRealizacion: "12/02/2025",
      fechaRegistro: "12/02/2025",
    },
  ];

  const calendarDays = getDaysInMonth(currentMonth);

  return (
    <div className="fiscalizador-registro-main-container">
      <div className="fiscalizador-registro">
        <div className="fiscalizador-registro-content">
          {/* Controls Section */}
          <div className="fiscalizador-registro-controls">
            <div className="fiscalizador-registro-date-control">
              <button
                className="fiscalizador-registro-date-prev"
                onClick={handlePrevDate}
              >
                ‹
              </button>

              <div
                className="fiscalizador-registro-date-selector"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                <span className="fiscalizador-registro-date-text">
                  {formatDate(selectedDate)}
                </span>
                {isToday(selectedDate) && (
                  <span className="fiscalizador-registro-date-today">Hoy</span>
                )}
                <span className="fiscalizador-registro-date-arrow">▼</span>
              </div>

              <button
                className="fiscalizador-registro-date-next"
                onClick={handleNextDate}
              >
                ›
              </button>

              {/* Date Picker */}
              {showDatePicker && (
                <>
                  <div
                    className="fiscalizador-registro-date-overlay"
                    onClick={() => setShowDatePicker(false)}
                  />
                  <div className="fiscalizador-registro-date-picker">
                    {/* Header */}
                    <div className="fiscalizador-registro-date-picker-header">
                      <button onClick={handlePrevMonth}>‹</button>
                      <span>
                        {monthNames[currentMonth.getMonth()]}{" "}
                        {currentMonth.getFullYear()}
                      </span>
                      <button onClick={handleNextMonth}>›</button>
                    </div>

                    {/* Weekdays */}
                    <div className="fiscalizador-registro-date-picker-weekdays">
                      {dayNames.map((day) => (
                        <div
                          key={day}
                          className="fiscalizador-registro-weekday"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="fiscalizador-registro-date-picker-calendar">
                      {calendarDays.map((day, index) => {
                        const isCurrentMonth =
                          day.getMonth() === currentMonth.getMonth();
                        const isTodayDate = isToday(day);
                        const isSelected = isSameDay(day, selectedDate);

                        return (
                          <button
                            key={index}
                            onClick={() => handleDateClick(day)}
                            className={`fiscalizador-registro-calendar-day ${
                              !isCurrentMonth ? "other-month" : ""
                            } ${isTodayDate ? "today" : ""} ${
                              isSelected ? "selected" : ""
                            }`}
                          >
                            {day.getDate()}
                          </button>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="fiscalizador-registro-date-picker-footer">
                      <button
                        className="fiscalizador-registro-today-button"
                        onClick={handleTodayClick}
                      >
                        Hoy
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="fiscalizador-registro-search-add">
              <div className="fiscalizador-registro-search-container">
                <input
                  type="text"
                  placeholder="Buscar Actividad"
                  className="fiscalizador-registro-search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="fiscalizador-registro-search-button">
                  🔍
                </button>
              </div>
              <button className="fiscalizador-registro-add-button" onClick={handleAddClick}>
                + Añadir
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="fiscalizador-registro-table-section">
            <div className="fiscalizador-registro-section-title">
              <h3>Registrar Actividades</h3>
            </div>

            <div className="fiscalizador-registro-table-container">
              <table className="fiscalizador-registro-table">
                <thead>
                  <tr>
                    <th className="fiscalizador-registro-checkbox-column">
                      <input
                        type="checkbox"
                        checked={selectedItems.length === activities.length}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>ID</th>
                    <th>TAREA</th>
                    <th>DESCRIPCIÓN</th>
                    <th>FECHA DE REALIZACIÓN</th>
                    <th>FECHA DE REGISTRO</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity, index) => (
                    <tr key={index} className="fiscalizador-registro-table-row">
                      <td className="fiscalizador-registro-checkbox-column">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(activity.id + index)}
                          onChange={() => handleSelectItem(activity.id + index)}
                        />
                      </td>
                      <td className="fiscalizador-registro-id-cell">
                        {activity.id}
                      </td>
                      <td>{activity.tarea}</td>
                      <td className="fiscalizador-registro-description-cell">
                        {activity.descripcion}
                      </td>
                      <td>{activity.fechaRealizacion}</td>
                      <td>{activity.fechaRegistro}</td>
                      <td className="fiscalizador-registro-actions">
                        <button className="fiscalizador-registro-edit-button">
                          Editar
                        </button>
                        <button className="fiscalizador-registro-delete-button">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="fiscalizador-registro-pagination">
              <div className="fiscalizador-registro-pagination-info">
                Mostrando 1 a 10 de 10 actividades
              </div>
              <div className="fiscalizador-registro-pagination-controls">
                <button className="fiscalizador-registro-pagination-button">
                  Anterior
                </button>
                <button className="fiscalizador-registro-pagination-number active">
                  1
                </button>
                <button className="fiscalizador-registro-pagination-number">
                  2
                </button>
                <button className="fiscalizador-registro-pagination-number">
                  3
                </button>
                <button className="fiscalizador-registro-pagination-button">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Nuevo Registro</h2>
              <button
                onClick={handleCloseModal}
                className="close-button"
              >
                <Close />
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-form-container">
                <div className="modal-label">Tipo de Actividad</div>
                <select
                  value={selectedActivity}
                  onChange={(e) => setSelectedActivity(e.target.value)}
                  className="modal-input"
                  style={{
                    maxHeight: '200px',
                    overflowY: 'auto',
                    overflowX: 'hidden'
                  }}
                >
                  <option value="">Seleccionar Actividad</option>
                  {activityTypes.map((type) => (
                    <option key={type.typeId} value={type.typeId}>
                      {type.name}
                    </option>
                  ))}
                </select>

                <div className="modal-label">Descripción</div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="modal-input"
                  rows={4}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={handleAdd}
                className="modal-button modal-button-primary"
              >
                + Añadir
              </button>
              <button
                onClick={handleCloseModal}
                className="modal-button modal-button-danger"
              >
                X Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registrar;
