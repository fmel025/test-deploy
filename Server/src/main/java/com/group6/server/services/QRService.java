package com.group6.server.services;

import com.group6.server.models.entites.CodeQR;
import com.group6.server.models.entites.Ticket;

public interface QRService {
    // You need the data
    CodeQR save(CodeQR qr);

    void validateQR(CodeQR qr);

    Boolean isQRValid(CodeQR qr);

    Boolean isQRExpired(CodeQR qr);

    CodeQR getLastQRByTicket(Ticket ticket);
}
