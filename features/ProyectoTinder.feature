Feature: Tinder
    Descripcion de la feature (opcional)
    Background: Abrir tinder e inicar sesion
        Given open Tinder
        When iniciar sesion en Tinder con usuario "pipo.mataderos@hotmail.com" y contraseña "Shamshiadad1"
    
    Scenario: Tinderbuitreo
        Then mandar corazones

    Scenario: verificar que el like funcione
        Then verificar like
    Scenario: verificar que el superlike funcione
        Then verificar superlike
    Scenario: verificar que el rechazo funcione
        Then verificar rechazo 
    Scenario: verificar que no se pueda hacer mas de un superlike
        Then verificar doble superlike