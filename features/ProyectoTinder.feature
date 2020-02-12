Feature: Tinder
    Descripcion de la feature (opcional)
    Background: Abrir tinder e inicar sesion
        Given open Tinder
        When iniciar sesion en Tinder con usuario "pipo.mataderos@hotmail.com" y contraseña "Shamshiadad1"


    Scenario: verificar que el like funcione
        When envio un like
        Then verificar like
    Scenario: verificar que el superlike funcione
        When envio un superlike
        Then verificar superlike
    Scenario: verificar que el rechazo funcione
        When envio rechazo
        Then verificar rechazo
    Scenario: verificar que no se pueda hacer mas de un superlike
        When envio un superlike
        And envio un superlike
        Then verificar doble superlike

    Scenario: Tinderbuitreo
        Then mandar corazones





