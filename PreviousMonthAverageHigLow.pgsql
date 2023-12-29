CREATE View public.previous_month_average AS
SELECT keskihinta,
yläraja,
alaraja
FROM average_by_year_and_month
WHERE vuosi = EXTRACT(YEAR FROM now()) AND
    kuukausi = EXTRACT(MONTH FROM now()) -1


