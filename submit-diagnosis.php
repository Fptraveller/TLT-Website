<?php
/**
 * Fresh Air Effect — Diagnosis form handler
 * Receives POST from fresh-air.html and emails results to Focco.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// ── Collect & sanitise input ──────────────────────────────────────────────────
$name    = trim(strip_tags($_POST['name']    ?? ''));
$email   = trim(strip_tags($_POST['email']   ?? ''));
$score   = trim(strip_tags($_POST['score']   ?? ''));
$phase   = trim(strip_tags($_POST['phase']   ?? ''));
$answers = trim(strip_tags($_POST['answers'] ?? ''));

// Basic validation
if ($name === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Name and email are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
    exit;
}

// ── Compose email ─────────────────────────────────────────────────────────────
$to      = 'focco@theleadershiptrail.eu';
$subject = "Fresh Air Effect: nieuwe diagnose aanvraag van {$name}";

$body  = "Er is een nieuwe Fresh Air Effect diagnose ingestuurd.\n\n";
$body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$body .= "NAAM:    {$name}\n";
$body .= "EMAIL:   {$email}\n";
$body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$body .= "SCORE:   {$score}\n";
$body .= "FASE:    {$phase}\n";
$body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$body .= "ANTWOORDEN PER VRAAG:\n";

// Format answers nicely (incoming: "Q1:3, Q2:4, Q3:2, ...")
$answerLines = explode(',', $answers);
foreach ($answerLines as $a) {
    $body .= '  ' . trim($a) . "\n";
}

$body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$body .= "\nJe kunt direct antwoorden op deze e-mail — de Reply-To is ingesteld op {$email}.\n";
$body .= "\n— The Leadership Trail™\n";

// ── Headers ───────────────────────────────────────────────────────────────────
$headers  = "From: no-reply@theleadershiptrail.eu\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// ── Send ──────────────────────────────────────────────────────────────────────
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail could not be sent. Check server mail settings.']);
}
