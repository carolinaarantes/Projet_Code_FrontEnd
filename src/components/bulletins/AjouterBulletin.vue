<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="moyenne" class="moyenneBulletin">Moyenne</label>
                <div class="moyenneBulletin">
                    <input :style="{border:error('moyenne')?'1px solid red':''}" type="text"  v-model="bulletin.moyenne" > /*class="form-control" id="moyenne"*/
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useBulletin from '../../services/serviceBulletin';
const router = useRouter()
const { ajouterBulletin } = useBulletin()

const bulletin = ref({
    moyenne: ''
})

const soumettre = () => {
    console.log('bulletin', bulletin.value)
    ajouterBulletin(bulletin.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout du bulletin", err))
}
</script>

<style lang="scss" scoped></style>