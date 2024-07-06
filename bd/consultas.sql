-- Armando Augusto Marchini Vidal - 13673072
-- Marcos Vilela Rezende Júnior - 13729806


SELECT 
    M.Crm AS IdMedico,
    P.IdPac AS IdPaciente,
    C.IdEsp AS IdEspecial,
    C.Dia AS Data,
    C.HoraInicCon AS HoraInicCon
FROM 
    MEDICO M
JOIN 
    CONSULTA C ON M.Crm = C.Crm
JOIN 
    PACIENTE P ON C.IdPac = P.IdPac
WHERE 
    M.NomeM = 'Dr. House' 
    AND P.NomeP = 'Diego Pituca';




SELECT 
    M.Crm AS CRM,
    M.NomeM AS NomeM
FROM 
    MEDICO M
WHERE 
    M.Crm IN (
        SELECT 
            E.Crm
        FROM 
            EXERCE_ESP E
        JOIN 
            ESPECIALIDADE ES ON E.IdEsp = ES.IdEsp
        WHERE 
            ES.NomeE = 'Dermatologia'
    )
AND 
    M.Crm NOT IN (
        SELECT 
            E.Crm
        FROM 
            EXERCE_ESP E
        JOIN 
            ESPECIALIDADE ES ON E.IdEsp = ES.IdEsp
        WHERE 
            ES.NomeE <> 'Dermatologia'
    );



SELECT 
    M.Crm AS CRM,
    M.NomeM AS NomeM
FROM 
    MEDICO M
WHERE NOT EXISTS (
    SELECT 
        ES.IdEsp
    FROM 
        ESPECIALIDADE ES
    WHERE NOT EXISTS (
        SELECT 
            E.Crm
        FROM 
            EXERCE_ESP E
        WHERE 
            E.Crm = M.Crm 
            AND E.IdEsp = ES.IdEsp
    )
);



SELECT 
    DISTINCT P.Cpf AS CPF,
    P.NomeP AS NomeP
FROM 
    MEDICO M
JOIN 
    CONSULTA C ON M.Crm = C.Crm
JOIN 
    PACIENTE P ON C.IdPac = P.IdPac
JOIN 
    ESPECIALIDADE E ON C.IdEsp = E.IdEsp
WHERE 
    M.NomeM = 'Dr. House' 
    AND E.NomeE = 'Cardiologia';



SELECT
    M.NomeM
FROM
    MEDICO M
INNER JOIN
    AGENDA A ON M.Crm = A.Crm
GROUP BY
    M.Crm
HAVING
    COUNT(DISTINCT A.DiaSemana) = 7;



SELECT
    C.Crm AS IdMedico,
    C.IdPac AS IdPaciente,
    C.IdEsp AS IdEspecial,
    C.Dia AS Data,
    C.HoraInicCon AS HoraInicCon
FROM
    CONSULTA C
WHERE
    EXTRACT(MONTH FROM C.Dia) = 1
    AND EXTRACT(YEAR FROM C.Dia) = 2024;



SELECT
    E.IdEsp AS ID, E.NomeE AS Especialidade, COUNT(C.IdCon) AS Quantidade
FROM
    CONSULTA C
INNER JOIN
    MEDICO M ON C.Crm = M.Crm
INNER JOIN
    ESPECIALIDADE E ON C.IdEsp = E.IdEsp
WHERE
    M.NomeM = 'Dr. House'
GROUP BY
    E.IdEsp;



SELECT
    M.Crm, M.NomeM
FROM
    MEDICO M
LEFT JOIN
    CONSULTA C ON M.Crm = C.Crm
GROUP BY
    M.Crm
ORDER BY
    COUNT(C.IdCon) ASC
LIMIT 1;



DELETE FROM
    CONSULTA
WHERE
    Pagou = FALSE;



UPDATE CONSULTA
SET Crm = (SELECT Crm FROM MEDICO WHERE NomeM = 'Dr. Kildare'),
    Dia = '2024-05-24'
WHERE IdCon IN (
    SELECT c.IdCon
    FROM CONSULTA c
    INNER JOIN PACIENTE p ON c.IdPac = p.IdPac
    INNER JOIN MEDICO m ON c.Crm = m.Crm
    INNER JOIN ESPECIALIDADE e ON c.IdEsp = e.IdEsp
    WHERE p.NomeP = 'Diego Pituca'
      AND c.Dia = '2024-05-10'
      AND c.HoraInicCon = '10:00:00'
      AND e.NomeE = 'Dermatologia'
      AND m.NomeM = 'Dr. House'
);
