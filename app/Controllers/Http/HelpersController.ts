export default class HelpersController {
  public async calcGarden ({ view, request }) {
    const body = request.body()
    if (!Object.entries(body).length) {
      return view.render('calculate', { calculation: {} })
    }

    const size = parseInt(body.size)
    const bed = parseFloat(body.vegetables)
    const greenhouse = body.greenhouse && parseFloat(body.greenhouse)

    const halbstamm = body.halbstamm && parseInt(body.halbstamm) * 10
    const niederstamm = body.niederstamm && parseInt(body.niederstamm) * 5
    const buschbaum = body.buschbaum && parseFloat(body.buschbaum) * 2.5
    const spindel = body.spindel && parseFloat(body.spindel) * 1.5
    const beeren = body.beeren && parseFloat(body.beeren)
    const spalierobst = body.spalierobst && parseFloat(body.spalierobst) * 0.5

    const sum = bed + greenhouse +
     halbstamm + niederstamm + buschbaum + spindel +
     beeren + spalierobst
    const result = (100 * sum) / size

    const calculation = {
      ...body,
      result: result.toFixed(2),
    }
    return view.render('calculate', { calculation })
  }
}
