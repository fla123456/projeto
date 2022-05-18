<?php

$servidor="localhost";
$usuario="root";
$senha="";
$database="cadastro";


$con= mysqli_connect ($servidor,$usuario,$senha,$database);






if ($con){
    echo 'conexão feita com sucesso';


}

else {
    echo 'conexão deu erro';
}
  ?>