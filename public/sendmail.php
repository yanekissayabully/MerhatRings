<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"] ?? '');

    $siteName = "RINGS"; // Название сайта
    $to = "merhatjewerly@gmail.com"; // ← твоя почта
    $subject = "Новая заявка с сайта $siteName";

    // Тело письма
    $body = "Заявка с сайта: $siteName\n\n";
    $body .= "Имя: $name\n";
    $body .= "Телефон: $phone\n";
    $body .= "Сообщение: $message\n";

    // Заголовки
    $headers = "From: $siteName <no-reply@rings.merhatjewelry.com>\r\n";
    $headers .= "Reply-To: $to\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["ok" => true, "message" => "Заявка успешно отправлена!"]);
    } else {
        echo json_encode(["ok" => false, "error" => "Ошибка отправки письма."]);
    }
}
?>
