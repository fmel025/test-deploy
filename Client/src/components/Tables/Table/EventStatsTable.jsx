const EventStatsTable= () => {
    return(
        <div className="stats stats-horizontal lg:stats-vertical shadow w-4/5 lg:w-1/5 bg-main">
    
            <div className="stat">
                <div className="stat-title text-white">Tickets vendidos</div>
                <div className="stat-value text-white">100</div>
                <div className="stat-desc text-white">Enero 1- Marzo 1</div>
            </div>
            
            <div className="stat">
                <div className="stat-title text-white">Asistencia total</div>
                <div className="stat-value text-white">70%</div>
                <div className="stat-desc text-white">70 de 100</div>
            </div>
            
            <div className="stat">
                <div className="stat-title text-white">Asistencias grupales</div>
                <div className="stat-value text-white">20%</div>
                <div className="stat-desc text-white">80% de asistencia individual</div>
            </div>

            <div className="stat">
                <div className="stat-title text-white">Localidad mas popular</div>
                <div className="stat-value text-2xl text-white">Asiento VIP</div>
                <div className="stat-desc text-white">58 de 100</div>
            </div>
            
    </div>
    )
}

export default EventStatsTable