﻿document.addEventListener('DOMContentLoaded', function () {

    const alerts = document.querySelectorAll('.alert');

    if (alerts.length > 0) {
        setTimeout(function () {
            alerts.forEach(function (alert) {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            });
        }, 5000);
    }
});