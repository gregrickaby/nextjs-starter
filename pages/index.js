import config from '@/lib/config'
import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <Layout title={config.siteTitle} description={config.siteDescription}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In schola
        desinis. Quid in isto egregio tuo officio et tanta fide-sic enim
        existimo-ad corpus refers? Scaevolam M. Duo Reges: constructio
        interrete. Ut placet, inquit, etsi enim illud erat aptius, aequum cuique
        concedere. Videamus animi partes, quarum est conspectus illustrior; Nos
        quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil
        habemus.{' '}
      </p>
      <p>
        Illi enim inter se dissentiunt. Hoc enim constituto in philosophia
        constituta sunt omnia. Quam illa ardentis amores excitaret sui! Cur
        tandem? Quod non faceret, si in voluptate summum bonum poneret. Itaque
        sensibus rationem adiunxit et ratione effecta sensus non reliquit.
        Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius
        quiddam et obscurius. Dolere malum est: in crucem qui agitur, beatus
        esse non potest. Iam illud quale tandem est, bona praeterita non
        effluere sapienti, mala meminisse non oportere? Fatebuntur Stoici haec
        omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse.
        Illa argumenta propria videamus, cur omnia sint paria peccata.{' '}
      </p>
      <p>
        Mihi, inquam, qui te id ipsum rogavi? Quae diligentissime contra
        Aristonem dicuntur a Chryippo. At enim hic etiam dolore. Quo studio cum
        satiari non possint, omnium ceterarum rerum obliti níhil abiectum, nihil
        humile cogitant; Unum nescio, quo modo possit, si luxuriosus sit,
        finitas cupiditates habere. Qui potest igitur habitare in beata vita
        summi mali metus? Ita enim vivunt quidam, ut eorum vita refellatur
        oratio. Neminem videbis ita laudatum, ut artifex callidus comparandarum
        voluptatum diceretur. Illa argumenta propria videamus, cur omnia sint
        paria peccata.{' '}
      </p>
      <p>
        Estne, quaeso, inquam, sitienti in bibendo voluptas? An eum discere ea
        mavis, quae cum plane perdidiceriti nihil sciat? Mihi enim satis est,
        ipsis non satis. At iam decimum annum in spelunca iacet. Quae cum ita
        sint, effectum est nihil esse malum, quod turpe non sit. Quod cum
        dixissent, ille contra. Hoc dictum in una re latissime patet, ut in
        omnibus factis re, non teste moveamur. Sed quid attinet de rebus tam
        apertis plura requirere?{' '}
      </p>
    </Layout>
  )
}
