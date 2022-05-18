<?php 

include_once('banco.php');
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];


$sql = "insert into usuario (nome, email, senha) values ('$nome', '$email', '$senha')";

$query = mysqli_query( $con, $sql);

?>

<script>
    window.alert('Sucesso ao enviar as infomrações')
    window.location.href = 'p.inicio.html'
</script>