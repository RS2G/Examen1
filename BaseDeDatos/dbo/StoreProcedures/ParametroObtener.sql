CREATE PROCEDURE [dbo].[ParametroObtener]
	@Id_Parametro INT = NULL

AS
BEGIN
	SET NOCOUNT ON

	SELECT
		Id_Parametro
		,Codigo
		,Descripcion
		,Valor
		,Estado
	FROM 
		dbo.Parametro
	WHERE
		(@Id_Parametro IS NULL OR Id_Parametro = @Id_Parametro)

END
