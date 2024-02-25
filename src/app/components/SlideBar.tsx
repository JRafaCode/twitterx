"use client"
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";
import { Button } from "@nextui-org/react";

export default function slidebar() {
    return (
    <ListboxWrapper>
    <Listbox
        aria-label="Actions"
        onAction={(key) => alert(key)}
    >
        <ListboxItem key="new">Inicio</ListboxItem>
        <ListboxItem key="copy">Explorar</ListboxItem>
        <ListboxItem key="edit">Notificaciones</ListboxItem>
        <ListboxItem key="edit">Mensajes</ListboxItem>
        <ListboxItem key="edit">Listas</ListboxItem>
        <ListboxItem key="edit">Guardados</ListboxItem>
        <ListboxItem key="edit">Comunidades</ListboxItem>
        <ListboxItem key="edit">Premium</ListboxItem>
        <ListboxItem key="edit">Perfil</ListboxItem>
        <ListboxItem key="edit">Más opciones</ListboxItem>
    </Listbox>
        <Button color="primary" size="md" radius="md" variant="shadow">
            Postear
        </Button>
    </ListboxWrapper>
    );
}
