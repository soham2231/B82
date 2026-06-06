-- Task 0 : Select World Database
USE world;

-- Task 1 : List all countries and continents
SELECT Name, Continent
FROM country;

-- Task 2 : List all cities in Japan
SELECT Name
FROM city
WHERE CountryCode = 'JPN';

-- Task 3 : Countries with population > 100 Million
SELECT Name, Population
FROM country
WHERE Population > 100000000;

-- Task 4 : Cities with population between 1 Million and 5 Million
SELECT Name, Population
FROM city
WHERE Population BETWEEN 1000000 AND 5000000;

-- Task 5 : Top 10 Most Populated Countries
SELECT Name, Population
FROM country
ORDER BY Population DESC
LIMIT 10;

-- Task 6 : Cities in China by Population
SELECT Name, Population
FROM city
WHERE CountryCode = 'CHN'
ORDER BY Population DESC;

-- Task 7 : Total Population of Asia
SELECT SUM(Population) AS TotalPopulation
FROM country
WHERE Continent = 'Asia';

-- Task 8 : Average Population of Cities in USA
SELECT AVG(Population) AS AveragePopulation
FROM city
WHERE CountryCode = 'USA';

-- Task 9 : Number of Countries per Continent
SELECT Continent,
COUNT(*) AS NumberOfCountries
FROM country
GROUP BY Continent;

-- Task 10 : Average Life Expectancy per Continent
SELECT Continent,
AVG(LifeExpectancy) AS AverageLifeExpectancy
FROM country
GROUP BY Continent;

-- Task 11 : Cities with Country Names
SELECT city.Name AS CityName,
country.Name AS CountryName
FROM city
JOIN country
ON city.CountryCode = country.Code;

-- Task 12 : Languages Spoken in Each Country
SELECT country.Name AS CountryName,
countrylanguage.Language
FROM countrylanguage
JOIN country
ON countrylanguage.CountryCode = country.Code;

-- Task 13 : Country with Highest Population
SELECT Name, Population
FROM country
WHERE Population =
(
SELECT MAX(Population)
FROM country
);

-- Task 14 : Countries Starting with 'A'
SELECT Name
FROM country
WHERE Name LIKE 'A%';

-- Task 15 : Cities Containing 'York'
SELECT Name
FROM city
WHERE Name LIKE '%York%';

-- Task 16 : Increase Population of Japan Cities by 10%
-- UPDATE city
-- SET Population = Population * 1.10
-- WHERE CountryCode = 'JPN';

-- Task 17 : Change Australia's Continent
-- UPDATE country
-- SET Continent = 'Oceania'
-- WHERE Name = 'Australia';

-- Task 18 : Delete Cities with Population Less Than 500
-- DELETE FROM city
-- WHERE Population < 500;

-- Task 19 : Total Number of Countries
SELECT COUNT(*) AS TotalCountries
FROM country;

-- Task 20 : Total Number of Cities
SELECT COUNT(*) AS TotalCities
FROM city;

-- Task 21 : Total Number of Languages
SELECT COUNT(DISTINCT Language) AS TotalLanguages
FROM countrylanguage;

-- Task 22 : Average Life Expectancy
SELECT AVG(LifeExpectancy) AS AverageLifeExpectancy
FROM country;

-- Task 23 : Top 10 Largest Cities
SELECT Name, Population
FROM city
ORDER BY Population DESC
LIMIT 10;

-- Task 24 : Total Population by Continent
SELECT Continent,
SUM(Population) AS TotalPopulation
FROM country
GROUP BY Continent;

-- Task 25 : Countries Above Average Population
SELECT Name, Population
FROM country
WHERE Population >
(
SELECT AVG(Population)
FROM country
);

-- Task 26 : Country Information (India)
SELECT *
FROM country
WHERE Name = 'India';

-- Task 27 : City Information (Mumbai)
SELECT *
FROM city
WHERE Name = 'Mumbai';

-- Task 28 : Top 10 Most Spoken Languages
SELECT Language,
COUNT(*) AS CountryCount
FROM countrylanguage
GROUP BY Language
ORDER BY CountryCount DESC
LIMIT 10;

-- Task 29 : Countries with Highest Life Expectancy
SELECT Name, LifeExpectancy
FROM country
ORDER BY LifeExpectancy DESC
LIMIT 10;

-- Task 30 : Countries with Lowest Life Expectancy
SELECT Name, LifeExpectancy
FROM country
ORDER BY LifeExpectancy ASC
LIMIT 10;