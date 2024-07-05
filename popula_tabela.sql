-- Armando Augusto Marchini Vidal - 13673072
-- Marcos Vilela Rezende Júnior - 13729806

-- Populando tabela MEDICO
INSERT INTO MEDICO (Crm, NomeM, TelefoneM, Percentual) VALUES 
('CRM12345', 'Dr. João Silva', '123456789', 70),
('CRM54321', 'Dra. Maria Santos', '987654321', 75),
('CRM98765', 'Dr. Pedro Oliveira', '555555555', 80),
('CRM11111', 'Dr. House', '9963036331', 65),
('CRM22222', 'Dra. Priscilla', '943258300', 80),
('CRM33333', 'Dr. José Moura', '981248791', 75),
('CRM44444', 'Dr. Kildare', '981248791', 75);

-- Populando tabela PACIENTE
INSERT INTO PACIENTE (IdPac, Cpf, NomeP, TelefonePac, Endereco, Idade, Sexo) VALUES 
(1, '12345678901', 'Ana Souza', '111111111', 'Rua A, 123', 35, 'F'),
(2, '98765432109', 'José Pereira', '222222222', 'Av. B, 456', 45, 'M'),
(3, '13579246801', 'Mariana Costa', '333333333', 'Rua C, 789', 25, 'F'),
(4, '11122233344', 'Diego Pituca', '999999999', 'Rua Dl, 989', 35, 'M');

-- Populando tabela DOENCA
INSERT INTO DOENCA (IdDoenca, NomeD) VALUES 
(1, 'Hipertensão'),
(2, 'Diabetes'),
(3, 'Pneumonia'),
(4, 'Astigmatismo');

-- Populando tabela ESPECIALIDADE
INSERT INTO ESPECIALIDADE (IdEsp, NomeE, Indice) VALUES 
(1, 'Cardiologia', 90),
(2, 'Endocrinologia', 85),
(3, 'Pneumologia', 80),
(4, 'Oftamologia', 90),
(5, 'Dermatologia', 95);

-- Populando tabela AGENDA
INSERT INTO AGENDA (IdAgenda, DiaSemana, HoraInicio, HoraFim, Crm) VALUES 
(1, 0, '08:00:00', '08:30:00', 'CRM12345'),
(2, 5, '10:00:00', '10:30:00', 'CRM54321'),
(3, 6, '09:00:00', '09:30:00', 'CRM98765'),
(4, 4, '11:00:00', '12:00:00', 'CRM11111'),
(5, 5, '15:00:00', '16:00:00', 'CRM11111'),
(6, 6, '15:00:00', '16:00:00', 'CRM11111'),
(7, 0, '15:00:00', '16:00:00', 'CRM11111'),
(8, 1, '15:00:00', '16:00:00', 'CRM11111'),
(9, 2, '15:00:00', '16:00:00', 'CRM11111'),
(10, 3, '15:00:00', '16:00:00', 'CRM11111'),
(11, 4, '15:00:00', '16:00:00', 'CRM11111'),
(12, 5, '15:00:00', '16:00:00', 'CRM12345'),
(13, 6, '15:00:00', '16:00:00', 'CRM12345'),
(14, 0, '15:00:00', '16:00:00', 'CRM12345'),
(15, 1, '15:00:00', '16:00:00', 'CRM12345'),
(16, 2, '15:00:00', '16:00:00', 'CRM12345'),
(17, 3, '15:00:00', '16:00:00', 'CRM12345'),
(18, 4, '15:00:00', '16:00:00', 'CRM12345'),
(19, 5, '10:00:00', '11:00:00', 'CRM44444'),
(20, 5, '10:00:00', '11:00:00', 'CRM11111');

-- Populando tabela EXERCE_ESP
INSERT INTO EXERCE_ESP (Crm, IdEsp) VALUES 
('CRM12345', 1),
('CRM54321', 2),
('CRM98765', 3),
('CRM11111', 4),
('CRM11111', 1),
('CRM11111', 2),
('CRM11111', 3),
('CRM11111', 5),
('CRM22222', 5),
('CRM33333', 5),
('CRM44444', 5);

-- Populando tabela CONSULTA
INSERT INTO CONSULTA (IdCon, Crm, IdEsp, IdPac, Dia, HoraInicCon, HoraFimCon, Pagou, ValorPago, FormaPagamento) VALUES 
(1, 'CRM12345', 1, 1, '2024-03-03', '08:00:00', '08:30:00', FALSE, 100, 'Cartão'),
(2, 'CRM54321', 2, 2, '2024-05-03', '10:00:00', '10:30:00', TRUE, 120, 'Dinheiro'),
(3, 'CRM98765', 3, 3, '2024-05-04', '09:00:00', '09:30:00', TRUE, 150, 'Transferência'),
(4, 'CRM11111', 4, 4, '2024-01-04', '11:00:00', '12:00:00', TRUE, 200, 'Dinheiro'),
(5, 'CRM11111', 1, 3, '2024-01-10', '15:00:00', '16:00:00', TRUE, 100, 'Cartão'),
(6, 'CRM11111', 5, 4, '2024-05-10', '10:00:00', '11:00:00', FALSE, 200, 'Transferência');

-- Populando tabela DIAGNOSTICO
INSERT INTO DIAGNOSTICO (IdDiagnostico, TratamentoRecomendado, RemediosReceitados, Observacoes, IdCon) VALUES 
(1, 'Controlar a pressão arterial', 'Medicação X, Medicação Y', 'Retorno em 1 mês para reavaliação', 1),
(2, 'Terapia com insulina', 'Insulina', 'Monitoramento da glicose no sangue necessário', 2),
(3, 'Antibióticos para pneumonia', 'Antibiótico Z', 'Repouso e hidratação recomendados', 3),
(4, 'Uso de óculos', 'Colírio Moura Brasil', 'Emissão de pedido de lente ocular', 4);

-- Populando tabela DIAGNOSTICA
INSERT INTO DIAGNOSTICA (IdDiagnostico, IdDoenca) VALUES 
(1, 1);
