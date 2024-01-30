function status(request, response) {
  response.status(200).json({"Chave":"alunos do curso.dev são pessoa acima da média"});
}

export default status;