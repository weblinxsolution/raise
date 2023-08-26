import React from 'react'
// import Logo from 'http://localhost:3000/logo.png'
// import { Chart } from "react-google-charts";

// export const data = [
//     ["Task", "Hours per Day"],
//     ["Work", 11],
//     ["Eat", 2],
//     ["Commute", 2],
//     ["Watch TV", 2],
//     ["Sleep", 7],
// ];

// export const options = {
//     title: "My Daily Activities",
// };

const Dashboard: React.FC = () => {

    return (
        <>
            <div className='header-content'>
                <div className='logo-content'>
                    <img src="https://64e9dcda8de23f313929b331--deft-pothos-8aa623.netlify.app/Rectangle%202.png" alt="image" />
                    <h1>Dashboard administrativo</h1>
                </div>
                <div className='profile-content'>
                    <div className='profile-image'>
                        <img src="https://64e9dcda8de23f313929b331--deft-pothos-8aa623.netlify.app/Rectangle%20718.png" alt="image" />
                    </div>
                    <div className='profile-details'>
                        <h5>Bem vindo, Samuel Rizzo </h5>
                        <p>Editar perfil</p>
                    </div>
                </div>
            </div>
            <div className='cards_section'>
                <div className='our-cards'>
                    <div>
                        <div className='cards-dates'>
                            <h3>Últimas vendas</h3>
                            <p>01/01/2023 a 28/01/2023</p>
                        </div>
                        <div className='cards-price'>
                            <h3>R$ 1500,00</h3>
                        </div>
                        <div className='cards-dates'>
                            <p>01/01/2023 a 28/01/2023</p>
                        </div>
                    </div>
                    <div>
                        <div className='chart-rating'>
                            <div>5 dias</div>
                            <div>15 dias</div>
                            <div className='fw-bold'>30 dias</div>
                            <div>6 meses</div>
                            <div>1 ano</div>
                        </div>
                        <div className='chart-line'>
                            <img src="https://64e9de218c80142d062c04b3--deft-pothos-8aa623.netlify.app/Frame%20340.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='our-cards'>
                    <div>
                        <div className='cards-dates'>
                            <h3>Taxa de crescimento (%)</h3>
                            <p>01/01/2023 a 28/01/2023</p>
                        </div>
                        <div className='cards-price'>
                            <h3>6,05 %</h3>
                            <span>
                                (84)
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='chart-rating'>
                            <div>5 dias</div>
                            <div>15 dias</div>
                            <div className='fw-bold'>30 dias</div>
                            <div>6 meses</div>
                            <div>1 ano</div>
                        </div>
                        <div className='chart-line'>
                            <img src="https://64e9de218c80142d062c04b3--deft-pothos-8aa623.netlify.app/Frame%20340.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='our-cards'>
                    <div>
                        <div className='cards-dates'>
                            <h3>Venda por produto (%)</h3>
                            <p>01/01/2023 a 28/01/2023</p>
                        </div>
                    </div>

                    {/* <Chart chartType="PieChart" data={data} options={options} width={"100%"} height={"300px"} /> */}


                    <div>
                        <div className='chart-circle' >
                            <img src="https://64e9dcda8de23f313929b331--deft-pothos-8aa623.netlify.app/_Pie%20chart.png" style={{ width: 280 }} alt="" />
                        </div>
                        <div className='chart-points' style={{ marginTop: 20 }}>
                            <div className='basic ball'>
                                <div></div>
                                <span>Básico</span>
                            </div>
                            <div className='intermediate ball'>
                                <div></div>
                                <span>Intermediário</span>
                            </div>
                            <div className='our ball'>
                                <div></div>
                                <span>Ouro</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='clients_section'>
                <div className='client_box'>
                    <div className='client-header'>
                        <div className='client-header-text'>
                            <h2>Clientes inativos</h2>
                            <p>01/01/2023 a 28/01/2023</p>
                        </div>
                        <button>
                            Ver todos
                        </button>
                    </div>
                    <div className='cleint-items-box'>
                        <div className='cleint-items'>
                            <h5>Jacob Jones Courtney</h5>
                            <button>Entrar em contato</button>
                        </div>
                        <div className='cleint-items'>
                            <h5>Henry Dianne Russell</h5>
                            <button>Entrar em contato</button>
                        </div>
                        <div className='cleint-items'>
                            <h5>Brooklyn Simmons</h5>
                            <button>Entrar em contato</button>
                        </div>
                    </div>
                </div>
                <div className='registration-box'>
                    <div className='registration-header'>
                        <div>
                            <h2>Últimos clientes registrados</h2>
                            <p>01/01/2023 a 28/01/2023</p>
                        </div>
                        <button>
                            Ver todos
                        </button>
                    </div>
                    <div className='reg-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: 100 }}>Data</th>
                                    <th style={{ width: 80 }}>ID</th>
                                    <th>Nome</th>
                                    <th>Nº pedido</th>
                                    <th>Forma de pagamento</th>
                                    <th style={{ textAlign: 'end' }}>Status de pagamento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>28/01/2023</td>
                                    <td>05</td>
                                    <td>Andrey Simões Corrêa</td>
                                    <td>12345</td>
                                    <td>MP - Boleto</td>
                                    <td style={{ textAlign: 'end' }}>Aguardando pagamento</td>
                                </tr>
                                <tr>
                                    <td>28/01/2023</td>
                                    <td>05</td>
                                    <td>Andrey Simões Corrêa</td>
                                    <td>12345</td>
                                    <td>MP - Boleto</td>
                                    <td style={{ textAlign: 'end' }}>Aguardando pagamento</td>
                                </tr>

                                <tr>
                                    <td>28/01/2023</td>
                                    <td>05</td>
                                    <td>Andrey Simões Corrêa</td>
                                    <td>12345</td>
                                    <td>MP - Boleto</td>
                                    <td style={{ textAlign: 'end' }}>Aguardando pagamento</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;

